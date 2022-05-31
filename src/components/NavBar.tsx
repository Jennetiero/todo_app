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
          <Grid container sx={grid}>
            <Typography fontSize={20} color="white">
              Total tasks: {total || 0}
            </Typography>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const grid = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}
export default Navbar
