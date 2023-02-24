import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  const users = [
    {
      name: 'Santiago Sanchez',
      userName: 'santesanchez_',
      isFollowing: false
    },
    {
      name: 'Miguel Angel Duran',
      userName: 'midudev',
      isFollowing: true
    },
    {
      name: 'Gonzalo Pozzo',
      userName: 'goncy',
      isFollowing: true
    },
    {
      name: 'Pablo Hernandez',
      userName: 'pheralb',
      isFollowing: true
    }
  ]

  return (
    <div className="App">
      {
        users.map(({ userName, name, isFollowing}) => (
            <TwitterFollowCard 
              key={userName}
              name={name}
              userName={userName}
              initialIsFollowing={isFollowing}
            />
          )
        )
      }
    </div>
  )
}

export default App
