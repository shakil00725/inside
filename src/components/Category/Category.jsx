import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Article = [1, 2, 3, 4];

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '50px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        width: '50%',
    },

}));

const Category = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                {
                    Article.map(article => {
                        return (
                            <div key={article}>
                            <ExpansionPanel style={{ marginBottom:'8px', border:".5px solid grey"}}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon color='primary' />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                <Typography className={classes.heading}>Expansion Panel 1</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{ background:' #dbe8f7 '}}>
                                <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category;