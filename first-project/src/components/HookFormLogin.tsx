import { useForm } from "react-hook-form"

type Inputs = {
    email: string;
    password: string;
}

const HookFormLogin = () => {

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        console.log(data);
    }

  return (
    <>
        <h1>React Hook Form Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email"), { required: true, maxLength: 20}} />
            <input {...register("password"), { required: true, maxLength: 50}} />
            <input type="submit"/>
        </form>
    </>
  )
}

export default HookFormLogin