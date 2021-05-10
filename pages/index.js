import { Formik, Form, Field } from "formik";
import Head from "next/head";

function validateEmail(value) {
    let error;
    if (!value) {
        error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Invalid email address";
    }
    return error;
}

function validateUsername(value) {
    let error;
    if (!value) {
        error = "Required";
    } else if (value === "admin") {
        error = "Nice try!";
    }
    return error;
}

export default function Home() {
    return (
        <div>
            <Head>
                <title>Harsh Patel | Register</title>
            </Head>

            <div>
                <Formik
                    initialValues={{
                        username: "",
                        email: "",
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                        alert("Successfully submitted!!");
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="email">Email Address</label>{" "}
                            <Field name="email" validate={validateEmail} />
                            {errors.email && touched.email && (
                                <div>{errors.email}</div>
                            )}
                            <br />
                            <label htmlFor="username">Username</label>{" "}
                            <Field
                                name="username"
                                validate={validateUsername}
                            />
                            <br />
                            {errors.username && touched.username && (
                                <div>{errors.username}</div>
                            )}
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
