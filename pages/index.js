import { useFormik } from "formik";
import Head from "next/head";

export default function Home() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 10));
        },
    });

    return (
        <div>
            <Head>
                <title>Harsh Patel | Register</title>
            </Head>

            <div>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email Address</label>{" "}
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <br />
                    <br />
                    <label htmlFor="password">Password</label>{" "}
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
