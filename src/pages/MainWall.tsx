import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import PostCard from '../components/PostCard';
import Comment from '../components/Comment';


export default function MainWall() {
    return(
        <React.Fragment>
            <CssBaseline /> 
            <Container maxWidth="sm">
                <Comment />
                <PostCard />
            </Container>
        </React.Fragment>
    );
}