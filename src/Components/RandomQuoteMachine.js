import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import React, { Component } from 'react'


export class RandomQuoteMachine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            QuoteText: [],
            QuoteAuthor: []
        }
    }

    generateQuote = () => {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        }

        fetch('http://api.quotable.io/random', config)
            .then((res) => res.json())
            .then((data) => {
                {
                    this.setState({
                        QuoteText: data.content,
                        QuoteAuthor: data.author
                    })
                }
            })
    }

    render() {
        const { QuoteText, QuoteAuthor } = this.state
        return (
            <div className='App'>
                <div id='quote-box' className='quote'>
                    <h2 id='quote-text' className='quote-text'>{QuoteText}</h2>
                    <small className='quote-author' id='quote-author'>{QuoteAuthor}</small>

                    <div className='quote-btn'>
                        <a
                            id='tweet-quote'
                            className='btn button'
                            rel="noopener noreferrer"
                            target="_blank"
                            href={`http://twitter.com/intent/tweet?text=${QuoteText}`}>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </a>
                        <button onClick={this.generateQuote} className='button' id='new-quote'>Quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomQuoteMachine
