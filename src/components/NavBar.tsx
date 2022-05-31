import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import { Grid, Typography } from '@mui/material'

const Navbar = ({ total }) => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#3880ff' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontSize={20} color="white">
              Total tasks: {total || 0}
            </Typography>
            <Avatar alt="Jenny" src="/static/images/avatar/2.jpg" />
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
