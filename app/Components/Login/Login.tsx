// "use client";
// import { useState } from "react";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { loginUser, registerUser } from "@/api/usersService/usersService";
// import {
//   Button,
//   Modal,
//   Box,
//   Typography,
//   TextField,
//   FormControl,
//   InputLabel,
//   OutlinedInput,
//   InputAdornment,
//   IconButton,
//   Link,
// } from "@mui/material";
// interface LoginProps {
//   onAuthChange: (newToken: string | null) => void;
  
// }
// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     name: "",
//     lastName: "",
//     birthDate: "",
//     confirmPassword: "",
//   });

//   const [openLoginModal, setOpenLoginModal] = useState(false);
//   const [openRegisterModal, setOpenRegisterModal] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleOpenLoginModal = () => setOpenLoginModal(true);
//   const handleCloseLoginModal = () => setOpenLoginModal(false);
//   const handleOpenRegisterModal = () => {
//     setOpenRegisterModal(true);
//     setOpenLoginModal(false);
//   };
//   const handleCloseRegisterModal = () => setOpenRegisterModal(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmitLogin = async (e: React.FormEvent) => {
//      e.preventDefault();
//     try {
//       const response = await loginUser({
//         email: formData.email,
//         password: formData.password,
//       });
//       if (response.access_token) {
//         localStorage.setItem("accessToken", response.access_token);
//         window.location.reload();
//         handleCloseLoginModal();
//       }
//     } catch (error) {
//       console.error("Error al loguear usuario:", error);
//     }
//   };

//   const handleSubmitRegister = async (e: React.FormEvent) => {
//      e.preventDefault();


//     const dateParts = formData.birthDate.split("-"); 
//     if (dateParts.length !== 3) {
//       console.error("Formato de fecha inválido");
//       return;
//     }
//     const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`; 

//     try {
//       const response = await registerUser({
//         ...formData,
//         birthDate: formattedDate,
//       });
      
//       await handleSubmitLogin(new Event("submit"));
//       window.location.reload();
//       handleCloseRegisterModal();
//     } catch (error) {
//       console.error("Error al registrar usuario:", error);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

  

//   return (
//     <div className="flex justify-center items-center">
//       <Button onClick={handleOpenLoginModal} className="my-2 text-black block">
//         Iniciar Sesión
//       </Button>
//       <Button onClick={setOpenRegisterModal} className="my-2 text-black block">
//         Registrarse
//       </Button>

//       <Modal open={openLoginModal} onClose={handleCloseLoginModal}>
//         <Box className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white shadow-xl p-8 rounded-lg">
//           <Typography variant="h6" className="text-xl font-semibold">
//             Iniciar Sesión
//           </Typography>
//           <TextField
//             id="email"
//             label="Email"
//             onChange={handleInputChange}
//             value={formData.email}
//             className="w-72 "
//             color="error"
//             helperText=" "
//           />
//           <FormControl variant="outlined" className="w-72">
//             <InputLabel htmlFor="password">Contraseña</InputLabel>
//             <OutlinedInput
//               id="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               type={showPassword ? "text" : "password"}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton onClick={togglePasswordVisibility} edge="end">
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Contraseña"
//               color="error"
//             />
//           </FormControl>

//           <Box className="mt-5 w-full flex justify-evenly">
//             <Button variant="outlined" color="error" onClick={handleCloseLoginModal}>
//               Volver
//             </Button>
//             <Button variant="contained" color="error" onClick={handleSubmitLogin}>
//               Iniciar
//             </Button>
//           </Box>
//           <Typography className="text-sm mt-4">
//             ¿No tienes cuenta?
//             <Link
//               onClick={handleOpenRegisterModal}
//               className="px-2 text-red-600 hover:underline cursor-pointer"
//             >
//               Registrate
//             </Link>
//           </Typography>
//         </Box>
//       </Modal>

//       <Modal open={openRegisterModal} onClose={handleCloseRegisterModal}>
//         <Box className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white shadow-xl p-8 rounded-lg">
//           <Typography variant="h6" className="text-xl font-semibold">
//             Crear una cuenta
//           </Typography>
//           <TextField
//             id="name"
//             label="Nombre"
//             onChange={handleInputChange}
//             value={formData.name}
//             className="w-72"
//             helperText=" "
//             color="error"
//           />
//           <TextField
//             id="lastName"
//             label="Apellido"
//             onChange={handleInputChange}
//             value={formData.lastName}
//             className="w-72"
//             helperText=" "
//             color="error"
//           />
//           <TextField
//             id="email"
//             label="Email"
//             onChange={handleInputChange}
//             value={formData.email}
//             className="w-72"
//             helperText=" "
//             color="error"
//           />
//           <TextField
//             id="birthDate"
//             label="Fecha de nacimiento (dd-mm-yyyy)"
//             onChange={handleInputChange}
//             value={formData.birthDate}
//             className="w-72 mb-4"
//             color="error"
//           />
//           <FormControl variant="outlined" className="w-72">
//             <InputLabel htmlFor="password">Contraseña</InputLabel>
//             <OutlinedInput
//               id="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               type={showPassword ? "text" : "password"}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton onClick={togglePasswordVisibility} edge="end">
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Contraseña"
//               color="error"
//             />
//           </FormControl>
//           <FormControl variant="outlined" className="w-72 mt-4">
//             <InputLabel htmlFor="confirmPassword">Confirmar Contraseña</InputLabel>
//             <OutlinedInput
//               id="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//               type={showPassword ? "text" : "password"}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton onClick={togglePasswordVisibility} edge="end">
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Confirmar Contraseña"
//               color="error"
//             />
//           </FormControl>

//           <Box className="mt-5 w-full flex justify-evenly">
//             <Button variant="outlined" color="error" onClick={handleCloseRegisterModal}>
//               Volver
//             </Button>
//             <Button
//               variant="contained"
//               color="error"z
//               onClick={handleSubmitRegister}
//               disabled={
//                 !formData.email || !formData.password || formData.password !== formData.confirmPassword
//               }
//             >
//               Registrarse
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

