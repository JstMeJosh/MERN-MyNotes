import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { toast } from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import axiosInstance from "../lib/axios";
import NotesNotFound from "../components/NoteNotFound";

const HomePages = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axiosInstance.get("/home/notes");
        console.log(res.data);
        setNotes(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch notes");
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="mx-auto max-w-7xl p-4 mt-6">
        {loading && (
          <div className="flex items-center justify-center gap-1">
            <span className="loading loading-spinner text-primary"></span>
            <p>Loading Notes...</p>
          </div>
        )}
        {notes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes}/>
            ))}
          </div>
        ) : (
          !loading && (
            <NotesNotFound/>
          )
        )}
      </div>
    </div>
  );
};

export default HomePages;
