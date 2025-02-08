import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Girl } from "./assets/girlstand.svg";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flex: 'wrap',
        
      }}
    >
      <Box sx={{}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            borderRadius: "16px",
            gap: "33px",
            boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
            width: "620px",
            margin: "92px 96px 52px 66px",
          }}
        >
          <Logo />
          <Box sx={{}}>
            <Typography sx={{
              fontSize: "18px",
              fontWeight: "600",
              fontFamily:'poppins',
            }}>Identity Information</Typography>
            <Root>
              <Divider
                orientation="horizontal"
                sx={{
                  paddingTop: "10px",
                }}
              />
            </Root>
          </Box>
          <Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box>
                <Typography sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily:'poppins',
                }}>UAM</Typography>
                <FormControl
                  sx={{
                    m: 1,
                    width: "262px",  
                    height: "30px",  
                    border: "1px solid #D0D5DD",
                    borderRadius: "8px",
                    padding: "0px",
                  }}
                  variant="standard"
                >
                  <Input
                    disableUnderline={true}
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword ? "hide password" : "show password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          sx={{
                            padding: "4px",  
                            fontSize: "18px",  
                          }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={{
                      padding: "8px", 
                      fontSize: "14px",  
                      height: "30px", 
                      borderBottom: "none",  
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <Typography sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily:'poppins',
                }}>PAN</Typography>
                <FormControl
                  sx={{
                    m: 1,
                    width: "262px", 
                    height: "30px",  
                    border: "1px solid #D0D5DD",
                    borderRadius: "8px",
                    padding: "0px",
                  }}
                  variant="standard"
                >
                  <Input
                    disableUnderline={true}
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword ? "hide password" : "show password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          sx={{
                            padding: "4px",  
                            fontSize: "18px",  
                          }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={{
                      padding: "8px",  
                      fontSize: "14px",  
                      height: "30px", 
                      borderBottom: "none",  
                    }}
                  />
                </FormControl>
              </Box>
            </Box>
            <Typography sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily:'poppins',
                }}>Aadhar</Typography>

            <Box>
              <FormControl
                sx={{
                  m: 1,
                  width: "262px", 
                  height: "30px", 
                  border: "1px solid #D0D5DD",
                  borderRadius: "8px",
                  padding: "0px",
                }}
                variant="standard"
              >
                <Input
                  id="standard-adornment-password"
                  disableUnderline={true}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? "hide password" : "show password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        sx={{
                          padding: "4px",  
                          fontSize: "18px",  
                        }}
                        
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{
                    padding: "8px",  
                    fontSize: "14px", 
                    height: "30px",  
                    borderBottom: "none",  
                  }}
      
                />
              </FormControl>
            </Box>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop:'24px',
            }}>
            <Button
              sx={{
                padding: "10px",
                borderRadius: "4px",
                height: "40px",
                width: "570px",
                backgroundColor: "rgba(29, 67, 150, 1)",
                color: "#FFFFFF",
              }}
            >
              Next
            </Button>
            </Box>
          </Box>
          
        </Box>
        <Box
          sx={{
            paddingLeft: "10%",
          }}
        >
          <Typography
            sx={{
              paddingLeft: "10%",
              fontFamily: "poppins",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            © 2024, Jseven Technology Pvt. Ltd. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "blu.png"})`,
          width: '100%',
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}

      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            
          }}
        >
          <Girl style={{
            
          }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Form;


























// import React, { useState } from "react";
// import { Box, Typography, Button, IconButton, Input, InputAdornment, FormControl, Divider } from "@mui/material";
// import { ReactComponent as Logo } from "./assets/logo.svg";
// import { ReactComponent as Girl } from "./assets/girlstand.svg";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

// const Form = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   return (
//     <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%", minHeight: "100vh" }}>
      
//       {/* Left Side - Form */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           padding: "24px",
//           borderRadius: "16px",
//           gap: "20px",
//           boxShadow: "0px 2px 8px rgba(99, 99, 99, 0.2)",
//           maxWidth: "90%",
//           width: "100%",
//           margin: "auto",
//           textAlign: "center",
//         }}
//       >
//         <Logo style={{ alignSelf: "center", width: "100px", height: "auto" }} />
//         <Typography sx={{ fontSize: "18px", fontWeight: "600", fontFamily: "Poppins" }}>
//           Identity Information
//         </Typography>
//         <Divider />

//         {/* UAM & PAN */}
//         <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-between" }}>
//           <FormControl sx={{ width: "100%", maxWidth: "300px" }} variant="standard">
//             <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>UAM</Typography>
//             <Input
//               disableUnderline
//               type={showPassword ? "text" : "password"}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton onClick={handleClickShowPassword}>
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               sx={{ padding: "8px", border: "1px solid #D0D5DD", borderRadius: "8px", width: "100%" }}
//             />
//           </FormControl>

//           <FormControl sx={{ width: "100%", maxWidth: "300px" }} variant="standard">
//             <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>PAN</Typography>
//             <Input
//               disableUnderline
//               type={showPassword ? "text" : "password"}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton onClick={handleClickShowPassword}>
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               sx={{ padding: "8px", border: "1px solid #D0D5DD", borderRadius: "8px", width: "100%" }}
//             />
//           </FormControl>
//         </Box>

//         {/* Aadhar */}
//         <FormControl sx={{ width: "100%", maxWidth: "300px" }} variant="standard">
//           <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>Aadhar</Typography>
//           <Input
//             disableUnderline
//             type={showPassword ? "text" : "password"}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton onClick={handleClickShowPassword}>
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             sx={{ padding: "8px", border: "1px solid #D0D5DD", borderRadius: "8px", width: "100%" }}
//           />
//         </FormControl>

//         {/* Next Button */}
//         <Button
//           sx={{
//             padding: "10px",
//             borderRadius: "4px",
//             width: "100%",
//             maxWidth: "300px",
//             backgroundColor: "rgba(29, 67, 150, 1)",
//             color: "#FFFFFF",
//           }}
//         >
//           Next
//         </Button>
//       </Box>

//       {/* Right Side - Image */}
//       <Box
//         sx={{
//           width: "100%",
//           maxWidth: "400px",
//           height: "100vh",
//           backgroundImage: url(${process.env.PUBLIC_URL + "/blu.png"}),
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Girl style={{ maxWidth: "80%", height: "auto" }} />
//       </Box>

//       {/* Footer */}
//       <Box sx={{ width: "100%", textAlign: "center", padding: "20px" }}>
//         <Typography sx={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: "500" }}>
//           © 2024, Jseven Technology Pvt. Ltd. All Rights Reserved.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Form;