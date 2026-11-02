import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "./CreateRepository.css";

const CreateRepository = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleCreateRepository = async (e) => {
    e.preventDefault();

    const owner = localStorage.getItem("userId");

    if (!owner) {
      alert("Please login first!");
      navigate("/auth");
      return;
    }

    if (!name.trim()) {
      alert("Repository name is required!");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3002/repo/create",
        {
          owner,
          name,
          description,
          visibility,
          content: [],
          issues: [],
        }
      );

      console.log("Repository created:", response.data);

      alert("Repository created successfully!");

      navigate("/");
    } catch (err) {
      console.error(
        "Error creating repository:",
        err.response?.data || err.message
      );

      alert(
        err.response?.data?.error ||
          "Failed to create repository!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="create-repo-container">
        <div className="create-repo-card">
          <h1>Create a new repository</h1>
          <p>Create a repository for your project.</p>

          <form onSubmit={handleCreateRepository}>
            <label>Repository name *</label>
            <input
              type="text"
              placeholder="Enter repository name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Description</label>
            <textarea
              placeholder="Enter repository description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label>Visibility</label>

            <div className="visibility-options">
              <label>
                <input
                  type="radio"
                  checked={visibility === true}
                  onChange={() => setVisibility(true)}
                />
                Public
              </label>

              <label>
                <input
                  type="radio"
                  checked={visibility === false}
                  onChange={() => setVisibility(false)}
                />
                Private
              </label>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create repository"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateRepository;