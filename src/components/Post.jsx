import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, publishedAt, content}) {
    
    const [comments, setComments] = useState([
        'Post muito bacana, hein!?'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publisheDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }
    //tem que colocar o setCustomValidity com isso o react sabe que o usuário digitou alguma coisa
    function handleNewCommentChage() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    //Função que usa uma propriedades do js(setCustomValidity) para mudar o texto  
    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentWithoutDeleteOne);
    }

    //constante para verificar se o novo comentário está vazio
   const isNewCommentEmpty = newCommentText.length === 0; 
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar src={author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
                </div>

                <time title={publisheDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                    {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                    })} 
            </div>
            
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChage}
                    //onInvalid é um propriedade do react que diz quando o campo está vazio
                    //vamos adicioanar a nova função de texto
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    {/* caso não tenha nada o botão ficará desabilitado */}
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                    {comments.map(comment => {
                        return (
                        <Comment key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}/>)
                    })}
            </div>
        </article>
    )
}