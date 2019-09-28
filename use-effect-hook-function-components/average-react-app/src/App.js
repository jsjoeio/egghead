import React from 'react'
import { Container, InnerContainer } from './App.styles'
import { FeedbackClassComponent } from './components/Feedback/Feedback.class'
import { FeedbackFunctionComponent } from './components/Feedback/Feedback.function'
import { FeedbackEffectComponent } from './components/Feedback/Feedback.effect'

function App() {
  return (
    <Container id="average-react-app">
      <h1>Fake Web App</h1>
      <InnerContainer>
        <FeedbackClassComponent />
        <FeedbackFunctionComponent />
        <FeedbackEffectComponent />
      </InnerContainer>
    </Container>
  )
}

export default App
