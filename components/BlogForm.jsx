"use client";
import dynamic from "next/dynamic";
import { useRef, useMemo } from "react";
import "quill/dist/quill.snow.css";
import Editor from "./QuillEditor";

function BlogForm() {
  // const Editor = dynamic(() => import("./QuillEditor"), { ssr: false });
  const quillRef = useRef();

  // const Editor = useMemo(() => {
  //   return dynamic(() => import("./QuillEditor"), { ssr: false });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quillRef.current.getSemanticHTML());
  };

  return (
    <form className="space-y-5 flex flex-col">
      <div className="form-group flex gap-5 justify-between items-center">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-group justify-center items-center space-y-3">
        <label htmlFor="content">Content</label>

        <Editor ref={quillRef} />
      </div>

      <div className=" flex justify-center">
        <button type="submit" className="btn w-36" onClick={handleSubmit}>
          Post
        </button>
      </div>
    </form>
  );
}

export default BlogForm;
