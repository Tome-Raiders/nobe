import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

interface Discussion {
  id: string;
  name: string;
}

function ClubDiscussion() {
  const { id } = useParams<{ id: string }>();
  const [discussions, setDiscussion] = useState<Discussion | null>(null);

  useEffect(() => {
    async function fetchDiscussion() {
      const response = await axios.get(`/api/clubs/${id}/discussion`);
      setDiscussion(response.data);
    }
    fetchDiscussion();
  }, [id])


  return (
    <div>
      <h1>Book Club Discussion</h1>
    </div>
  )
}

export default ClubDiscussion;
