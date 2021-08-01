import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import moviesData from '../../common/moviesData';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.background.paper,
      
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        
    },
  }));

export function UpcomingMovies() {
    const classes = useStyles();
      
        return (
          <div className={classes.root}>
            <ImageList rowHeight={250} className={classes.imageList} cols={2.5}>
              {moviesData.map((item) => (
                <ImageListItem key={item.id} style={{ width: '307px'}}>
                  <img src={item.poster_url} alt={item.title} />
                  <ImageListItemBar
                    title={item.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        );
      }