import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { FormControl, TextField, Button, Box, Typography } from '@mui/material';
import { useAppSelector } from '../../../hooks/useRedux/useAppRedux';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
    Email: string;
    Password: string;
}

const Login: React.FC = () => {
    const navigate = useNavigate()
    const { userDetails } = useAppSelector(state => state.application)
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        defaultValues: {
            Email: '',
            Password: ''
        }
    });

    const onSubmit: SubmitHandler<IFormInput> = data => {
        const validUser = userDetails.some((user: any) => user.Email.toLowerCase() === data.Email.toLowerCase());
        if(validUser){
            navigate('/')
        }
    };

    return (
        <Box sx={{ maxWidth: 300, m: 'auto' }}>
            <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>Login</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth margin="normal">
                    <Controller
                        name="Email"
                        control={control}
                        rules={{ required: 'Email is required' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                id="Email"
                                label="Email"
                                error={!!errors.Email}
                                helperText={errors.Email ? errors.Email.message : ''}
                            />
                        )}
                    />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <Controller
                        name="Password"
                        control={control}
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                id="Password"
                                label="Password"
                                type="password"
                                error={!!errors.Password}
                                helperText={errors.Password ? errors.Password.message : ''}
                            />
                        )}
                    />
                </FormControl>
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>Submit</Button>
            </form>
        </Box>
    );
};

export default Login;
