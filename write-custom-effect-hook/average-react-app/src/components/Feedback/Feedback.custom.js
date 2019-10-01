import React, { useState, useEffect } from 'react'
import { Form, Label, Textarea, Button, Title } from './Feedback.styles'

function useText(initialValue) {
  return useState(initialValue)
}

function useStarWarsQuote() {
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getStarWarsQuote() {
      setLoading(true)
      // Get initial text
      const response = await fetch(
        'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote'
      )
      const data = await response.json()
      const quote = data.starWarsQuote
      setQuote(quote)
      setLoading(false)
    }
    getStarWarsQuote()
  }, [])

  return { quote, loading }
}

export function FeedbackCustomComponent() {
  const [text, setText] = useText('')
  const { quote, loading } = useStarWarsQuote()

  useEffect(() => {
    if (quote) {
      setText(quote)
    }
  }, [quote, setText])
  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault()
    console.log(`Submitting response to API: "${text}"`)
    setText('')
  }

  // Update text in state onchange for textarea
  function handleTextChange(e) {
    const updatedText = e.target.value

    setText(updatedText)
  }

  if (loading) return <p>Loading...</p>

  if (quote) {
    return (
      <Form onSubmit={e => handleSubmit(e)}>
        <Title>Custom Example</Title>
        <Label>
          Have feedback for our team? <br /> Let us know here 👇
        <Textarea value={text} onChange={e => handleTextChange(e)} />
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }

  return null
}
