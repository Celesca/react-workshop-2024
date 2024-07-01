import { Button } from "@mui/material";

const Dashboard = () => {
    const isLogin: boolean = false;
    if (isLogin) {
        return (
            <div>Welcome to my channel</div>
        )
    }
    else {
        return (
            <>
                <Button variant="contained" color="primary">Login</Button>
            </>
        )
    }
}

export default Dashboard