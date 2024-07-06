import { useState } from "react";
import { Stack, Container, TextField, Button, Typography } from "@mui/material";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase'


const initForm = {
    email: '',
    password: '',
};

const AuthScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState(initForm);

    const authText = isLogin
        ? "Don't have an account?"
        : "Already have an account?";

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((oldForm) => ({
            ...oldForm,
            [name]: value,
        }));
    };

    const handleAuth = async () => {
        try {
            setIsLoading(true);
            if (isLogin) {
                await signInWithEmailAndPassword(auth, form.email, form.password);
            } else {
                await createUserWithEmailAndPassword(auth, form.email, form.password);
            }
        } catch (err) {
            const msg = err.code.split('auth/')[1].split('-').join(' ');
            console.log(msg);
            setIsLoading(false);
        }
    };

    return (
        <Container
            maxWidth="xs"
            sx={{
                mt: 10,
            }}>
            <Stack mb={6} spacing={4} alignItems="center" textAlign="center">
                <Typography color="rgba(255,255,255, .6)">Kanban App</Typography>
            </Stack>
            <Stack spacing={2}>
                <TextField
                    value={form.email}
                    name="email"
                    onChange={handleChange}
                    label="Email"
                />
                <TextField
                    value={form.password}
                    name="password"
                    onChange={handleChange}
                    label="Password"
                />
                <Button
                    disabled={isLoading || !form.email.trim() || !form.password.trim()}
                    onClick={handleAuth}
                    variant="contained">
                    {isLogin ? "Login" : "Register"}
                </Button>
            </Stack>
            <Typography
                sx={{
                    cursor: 'pointer',
                }}
                onClick={() => setIsLogin(old => !old)}
                mt={3}
                textAlign="center">
                {authText}
            </Typography>
        </Container>
    );
};

export default AuthScreen;
