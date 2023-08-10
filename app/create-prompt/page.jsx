'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


import Form from '@components/Form';


const CreatePrompt = () => {
  const [submitting, getSubmitting] = useState(false);
  const [post, getPost] = useState({
    prompt: '',
    tag: '',

  })

  const createPrompt = async (e) => {

  }

  return (
    <Form
        type="Create"
        post={post}
        setPost={getPost}
        submitting={submitting}
        handleSubmit={createPrompt}

    />


  )
}

export default CreatePrompt