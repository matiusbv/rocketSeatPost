
import {Post} from './components/Post'
import {Header} from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'
export function App() {

//simular um retorno de um banco de dados
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/matiusbv.png',
      name: 'Márcio Vasconcelos',
      role: 'Analista de Sistemas @TeconSuape'
    },
    content: [ 
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Mayk Brito',
      role: 'Educador @Rocketseat'
    },
    content: [ 
      {type: 'paragraph', content: 'Fala boy!',},
      {type: 'paragraph', content: 'Vi uma coisa muito legal me fala sobre isso 🚀'},
      {type: 'link', content: 'essemenino.doc/dentista'},
    ],
    publishedAt: new Date('2023-09-10 22:00:00'),
  },
];

  return (
  
    <div>
      <Header />
      
        <div className={styles.wrapper}>
      <Sidebar />
    <main>
      {posts.map(post => {
        return(<Post
          key={post.id} 
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
        />
        )
      })}
    
    </main>
    </div>
    </div>
  )
}


