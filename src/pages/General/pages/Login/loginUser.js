import { BsCheck } from 'react-icons/bs'
import { Button , Card,  Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import './index.css'
import useGeneral from '../../hooks/useGeneral';
import { FormsValidation } from './../../../../componente/Forms/formsValidate/export';
import CircularIndeterminate from './../../../../componente/Loader/index';


export default function LoginUser({onSubmit , setShowLogin}){
  const { isLoading , disabled } = useGeneral()


  const {
    register,
    reset,
    handleSubmit,
    formState: { errors , isValid }

  } = useForm({
    mode: 'onBlur'
  })


    return(
      <Box>
        <Grid 
          display='flex' 
          justifyContent={'center'} 
          alignItems={'center'} 
          height='80vh'
        >
          <Card style={{
            background: 'white', 
            color:'white', 
            padding:'3rem',
            width:'35%'
          }}
          >
            <Typography variant="h4" className="mb-4 text-center text-dark">
              Login user
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField 
                placeholder="Login"
                className="text-light LoginInput w-100"
                {...register('loginUser', {
                  required: FormsValidation.RequiredInput.required,
                  minLength: FormsValidation.minLengthValidation,
                  maxLength: FormsValidation.maxLengthValidation
                })}
              />

              <p className="text-danger mt-2">
                {errors?.loginUser && errors.loginUser.message}
                {isValid && <p className='text-success'>успешно <BsCheck/> </p>}
              </p>



              <Box display={'flex'}>
                
                <Button 
                  variant="contained" 
                  color='error' 
                  className="mt-4 p-3 me-2"
                  style={{whiteSpace:'nowrap'}}
                  onClick={() => setShowLogin(false)}
                >
                  Bach to home
                </Button>

                <Button 
                  variant="contained" 
                  color='success' 
                  className="mt-4"
                  fullWidth
                  type="submit"
                  disabled={!isValid || disabled}
                >
                  {
                    isLoading
                      ? <CircularIndeterminate />
                      : <>Register the user</>
                  }
                </Button>
              </Box>
            </form>
          </Card>
        </Grid>
      </Box>
    )
}