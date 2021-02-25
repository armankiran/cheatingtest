const textElement = document.getElementById(`text`)
const optionButtonsElement = document.getElementById(`option-buttons`)

let state = {}

function startGame(){
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while(optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement(`button`)
      button.innerText = option.text
      button.classList.add(`btn`)
      button.addEventListener(`click`, () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: `Did you caught him texting to another woman?`,
    options: [
      {
        text: `Yes`,
        nextText: 2
      },
      {
        text: `No`,
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: `She is probably a friend. 
    You should be ashamed for not trusting him and suck his cock more often.`,
    options: [
      {
        text: `Take the test again`,
        nextText: -1
      }
    ]
  },
  {
    id: 3,
    text : `Does he get random calls during the night?`,
    options: [
      {
        text: `Yes`,
        nextText: 4
      },
      {
        text: `No`,
        nextText: 5
      }
    ]
  },
  {
    id: 4,
    text: `It's probably related to work. 
    You should be ashamed for not trusting him and suck his cock more often.`,
    options: [
      {
        text: `Take the test again`,
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: `Did you receive a text/call from someone claiming that she has an affair with your husband?`,
    options: [
      {
        text: `Yes`,
        nextText: 6
      },
      {
        text: `No`,
        nextText: 7
      }
    ]
  },
  {
    id: 6,
    text: `Obviously it's a prank. You should be ashamed for not trusting him and suck his cock more often.`,
    options: [
      {
        text: `Take the test again`,
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: `He hasn't been interested in you sexually lately and you catched him watching porn?`,
    options: [
      {
        text: `Yes`,
        nextText: 8
      },
      {
        text: `No`,
        nextText: 9
      }
    ]
  },
  {
    id: 8,
    text: `Have you been doing enough?`,
    options: [
      {
        text: `I guess yes`,
        nextText: 10
      },
      {
        text: `I am not sure`,
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: `Obviously not. You should be ashamed and suck his cock more often.`,
    options: [
      {
        text: `Take the test again`,
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: `He was overfriendly with the coworker he invited for the dinner?`,
    options: [
      {
        text: `Yes`,
        nextText: 11
      },
      {
        text: `No`,
        nextText: 12
      }
    ]
  },
  {
    id: 11,
    text: `You should show how confident you are with yourself by inviting her to threesome.`,
    options: [
      {
        text: `Take the test again`,
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: `He's not cheating on you. You should still suck his cock more to make sure.`,
    options: [
      {
        text: `Take the test again`,
        nextText: -1
      }
    ]
  }
]

startGame()