"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    //TODO: Fix Post api/prompt/new 404 error
    try {
      const response = await fetch("api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        // .then((response) => response.body())
        // .then((data) => console.log(data));
      // const res  = await response.text();
      response.text().then((body) => console.log(`The body: ${body}`));

      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
      }

      console.log(`Print out the response: `, response);
      if (!response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
