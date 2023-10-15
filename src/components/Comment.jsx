import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}) {
    //criamos um estado para o like começando com 0
    //é importante iniciar o useState com um valor do tipo a ser recebido
    const [likeCount, setLikeCount] = useState(0)
    function handleDeleteComment() {
        onDeleteComment(content)
    }
    //função para atualizar os likes
    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt="" />
        
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Márcio Vasconcelos</strong>
                            <time title="28 de Setembro às 08:13h" dateTime="2023-09-28 08:11:20">Ceca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment}title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    {/* chamando a função  */}
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        {/* exibir a quantidade de likes */}
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}