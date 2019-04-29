import React, { Component } from 'react';
import Showdefect from '../../Showdefect';


export class get extends Component
{

    grtdefect(){
    let url = "http://localhost:8080/library/findDefect"
        console.log(url);
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                componentDidMount(data)

            })
        }
    }
