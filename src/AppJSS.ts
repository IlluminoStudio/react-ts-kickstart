import { createStyles, makeStyles } from '@material-ui/core'
import newTheme from './newTheme'

const useStyles = makeStyles((newTheme) =>
    createStyles({
        useNewTheme: {
            backgroundColor: newTheme.palette.primary.main,
        },
    })
)

export default useStyles
