import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { FormControl, TextField, Button, Box, Typography } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useAppDispatch } from '../../../hooks/useRedux/useAppRedux';
import { userDetails } from '../../../store/reducers/baseReducer';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
    Name: string;
    Email: string;
    PhoneNumber: string;
    DateOfBirth: string | null;
}

const Register: React.FC = () => {
    const useDispatch = useAppDispatch()
    const navigate = useNavigate()
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        defaultValues: {
            Name: '',
            Email: '',
            PhoneNumber: '',
            DateOfBirth: null
        }
    })

    const onSubmit: SubmitHandler<IFormInput> = data => {
        useDispatch(userDetails(data))
        navigate('/auth/login')
    };

    return (
        <Box sx={{ maxWidth: 400, m: 'auto' }}>
            <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>Register</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth margin="normal">
                    <Controller
                        name="Name"
                        control={control}
                        rules={{ required: 'Name is required' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                id="Name"
                                label="Name"
                                error={!!errors.Name}
                                helperText={errors.Name ? errors.Name.message : ''}
                            />
                        )}
                    />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <Controller
                        name="Email"
                        control={control}
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address'
                            }
                        }}
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
                        name="PhoneNumber"
                        control={control}
                        rules={{
                            required: 'Phone number is required',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Invalid phone number'
                            }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                id="PhoneNumber"
                                label="Phone Number"
                                error={!!errors.PhoneNumber}
                                helperText={errors.PhoneNumber ? errors.PhoneNumber.message : ''}
                            />
                        )}
                    />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <Controller
                            name="DateOfBirth"
                            control={control}
                            rules={{
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Invalid phone number'
                                }
                            }}
                            render={({ field }) => (
                                <DatePicker
                                    {...field}
                                    disableFuture
                                    label="Date of Birth"
                                    format='DD/MM/YYYY'
                                />
                            )}
                        />
                    </LocalizationProvider>
                </FormControl>
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>Register</Button>
            </form>
        </Box>
    );
};

export default Register;
