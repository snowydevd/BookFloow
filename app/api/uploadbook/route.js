import { NextResponse } from "next/server";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import formidable from "formidable";
import fs from "fs";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

// Configuración del formulario (formidable)
export const config = {
  api: {
    bodyParser: false, // Para manejar archivos de manera eficiente
  },
};

// POST para subir un libro
export async function POST(req) {
  const form = new formidable.IncomingForm();

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject(
          NextResponse.json(
            { error: "Error al procesar el formulario" },
            { status: 400 }
          )
        );
      }

      try {
        const { titulo, autor, paginas, precio } = fields;
        const portadaFile = files.portada;

        // Leer el archivo y subirlo a Firebase Storage
        const fileBuffer = fs.readFileSync(portadaFile.filepath);
        const storageRef = ref(
          storage,
          `portadas/${portadaFile.originalFilename}`
        );
        const snapshot = await uploadBytes(storageRef, fileBuffer, {
          contentType: portadaFile.mimetype,
        });

        // Obtener la URL del archivo
        const downloadURL = await getDownloadURL(snapshot.ref);

        // Guardar los detalles en Firestore
        await addDoc(collection(firestore, "libros"), {
          titulo,
          autor,
          paginas,
          precio,
          portada: downloadURL,
        });

        resolve(
          NextResponse.json(
            { message: "Libro subido con éxito" },
            { status: 200 }
          )
        );
      } catch (error) {
        reject(
          NextResponse.json(
            { error: "Error al subir el libro" },
            { status: 500 }
          )
        );
      }
    });
  });
}
