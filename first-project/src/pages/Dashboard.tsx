const Dashboard = () => {
    const isLogin: boolean = false;
    if (isLogin) {
        return (
            <div>Welcome to my channel</div>
        )
    }
    else {
        return (
            <div>Please login to access this page</div>
        )
    }
}

export default Dashboard