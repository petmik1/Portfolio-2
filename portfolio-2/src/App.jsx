import { Box, Link } from '@mui/material'
import './App.css'
import Typography from '@mui/material/Typography'
import { register } from 'swiper/element/bundle'
register()

function App() {
  return (
    <>
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          height: '100vh',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Typography variant="h1" color="initial">
          test
        </Typography>
        <Box component={'swiper-container'} navigation={true}>
          <Box component={'swiper-slide'}>
            <Box
              display={'flex'}
              flexDirection={'rows'}
              justifyContent={'space-around'}
              alignItems={'center'}
              padding={'3rem'}
            >
              <img src='../public/assets/sp2.png' width={'300px'} alt="" />
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  adipisci numquam? Debitis consequatur harum eum ipsum quisquam
                  laudantium at et nemo modi ab totam ullam consectetur nam,
                  perspiciatis velit itaque!
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component={'swiper-slide'}>
            <Box
              display={'flex'}
              flexDirection={'rows'}
              justifyContent={'space-around'}
              alignItems={'center'}
            >
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                width={'300px'}
                alt=""
              />
              <Typography variant="h2" color="initial">
                javascript framework CA
              </Typography>
            </Box>
          </Box>
          <Box component={'swiper-slide'}>
            <Box
              display={'flex'}
              flexDirection={'rows'}
              justifyContent={'space-around'}
              alignItems={'center'}
            >
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                width={'300px'}
                alt=""
              />
              <Typography variant="h2" color="initial">
                project exam 2
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App
