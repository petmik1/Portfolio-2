import { AppBar, Box, Link } from '@mui/material'
import './App.css'
import Typography from '@mui/material/Typography'
import { Toolbar } from '@mui/material'
import 'swiper/swiper-bundle.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import { register } from 'swiper/element/bundle'
register()

function App() {
  return (
    
      <Box
        sx={{
          bgcolor: '#d7d7d7',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            height: '10vh',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '2px solid black',
          }}
        >
          <Typography variant="h5" color="initial">
            Petter Mikalsen
          </Typography>
          <Typography variant="caption" color="initial">
            Frontend Developer
          </Typography>
        </Box>

        <Box component={'swiper-container'} navigation={true}>
          <Box component={'swiper-slide'}>
            <Box
              display={'flex'}
              flexDirection={{ xs: 'column-reverse', md: 'row' }}
              justifyContent={'space-around'}
              alignItems={'center'}
              padding={'3rem'}
              margin={'3rem'}
            >
              <Box
                component={'img'}
                src="/assets/sp2.png"
                width={{ xs: '100%', md: '50%' }}
                alt=""
              />
              <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-around'}
                alignItems={'center'}
              >
                <Typography variant="h2" color="initial">
                  Semester Project 2
                </Typography>
                <Link href="https://sp2.petter-mikalsen.site/">Demo</Link>
                <Link href="https://github.com/petmik1/SP2">Github</Link>
                <Typography variant="caption" color="initial">
                An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component={'swiper-slide'}>
            <Box
              display={'flex'}
              flexDirection={{ xs: 'column-reverse', md: 'row' }}
              justifyContent={'space-around'}
              alignItems={'center'}
              padding={'3rem'}
              margin={'3rem'}
            >
              <Box
                component={'img'}
                src="assets/javascript framework ca.png"
                width={{ xs: '100%', md: '50%' }}
                alt=""
              />
              <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-around'}
                alignItems={'center'}
              >
                <Typography variant="h2" color="initial">
                  JavaScript Frameworks CA
                </Typography>
                <Link href="https://prismatic-pixie-1caad2.netlify.app/">
                  Demo
                </Link>
                <Link href="https://github.com/petmik1/front-end-framework-ca">
                  Github
                </Link>
                <Typography variant="caption" color="initial">
                To apply knowleadge of react I create a eCom store using a noroff API.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component={'swiper-slide'}>
            <Box
              display={'flex'}
              flexDirection={{ xs: 'column-reverse', md: 'row' }}
              justifyContent={'space-around'}
              alignItems={'center'}
              padding={'3rem'}
              margin={'3rem'}
            >
              <Box
                component={'img'}
                src="/assets/PE2.png"
                width={{ xs: '100%', md: '50%' }}
                alt=""
              />
              <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-around'}
                alignItems={'center'}
              >
                <Typography variant="h2" color="initial">
                  Project Exam 2
                </Typography>
                <Link href="https://dainty-bonbon-fc0975.netlify.app/">
                  Demo
                </Link>
                <Link href="https://github.com/petmik1/project-exam-2">
                  Github
                </Link>
                <Typography variant="caption" color="initial">
                frontend web application for holidaze. created during the second project exam at Noroff.
                </Typography>
              </Box>
            </Box>
          </Box>

        </Box>
                  <AppBar
          color="transparent"
          sx={{ top: 'auto', bottom: 0, position:'absolute', borderTop: '2px solid rgb(26, 26, 27)' }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              color={'inherit'}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link
                style={{ color: 'inherit' }}
                href="mailto:petter.mikalsen.pehm@gmail.com"
              >
                contact me
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <FacebookOutlinedIcon />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default App
