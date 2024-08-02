"use client";

import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Import the CSS for the Snow theme

export default function QuilEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
    const createInstance = () => {
      const quillEditor = "editorRef.current;";
      if (quillEditor) {
        new Quill(quillEditor, {
          theme: "snow",
        });
      }
    };
    createInstance();
  }, []);

  return (
    <div>
      <div ref={editorRef} className="quill-editor"></div>
    </div>
  );
}
