import React from "react";
import { useForm } from "react-hook-form";

const ChangeCredentialsForm = () => {
  const usersReserved = ["admin", "root"];
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });


  const onSubmit = (data) => {
    alert(`New username ${data.username} New password ${data.password}`);
  };
  return (
    <main className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <section className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-lime-500 to-transparent"></div>
        <article className="mx-5 border border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <header className="flex flex-col p-6">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter">
              New Credentials
            </h3>
            <p className="mt-1.5 text-sm font-medium text-white/50">
              Enter your new credentials.
            </p>
          </header>
          <div className="p-6 pt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <div
                  className={`group relative rounded-lg border ${
                    errors.username ? "border-rose-700" : "border-sky-200"
                  } focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30`}
                >
                  <div className="flex justify-between">
                    <label
                      className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400"
                      htmlFor="username"
                    >
                      New Username
                    </label>
                  </div>
                  <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                    {...register("username", {
                      required: {
                        value: true,
                        message: "Username is required",
                      },
                      onBlur: () => {
                        trigger("username");
                      },
                      minLength: {
                        value: 3,
                        message: "Minimum length is 3 characters",
                      },
                      validate: {
                        notTaken: (value) =>
                          !usersReserved.includes(value) ||
                          "Username is already taken",
                      },
                    })}
                  />
                </div>
                {errors.username && (
                  <span className="text-rose-700">
                    {errors.username.message}
                  </span>
                )}
              </fieldset>
              <fieldset className="mt-4">
                <div
                 className={`group relative rounded-lg border ${
                  errors.password && (
                    errors.password.type === "strongPassword"
                    ? "border-sky-200"
                    : errors.password.type === "mediumPassword"
                    ? "border-amber-600"
                    : "border-rose-700"
                  )
                } focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30`}
                
                >
                  <div className="flex justify-between">
                    <label
                      className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400"
                      htmlFor="password"
                    >
                      New Password
                    </label>
                  </div>
                  <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-lime-500 sm:leading-7 text-foreground"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      onBlur: () => {
                        trigger("password");
                      },
                      validate: {
                        weakPassword: (value) =>
                          /^(?=.*[0-9])(?=.*[a-zA-Z]).*$/.test(value) ||
                          "Weak password: You need numbers and letters",
                        mediumPassword: (value) =>
                          /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*?&.]).{8,}$/.test(
                            value
                          ) ||
                          "Medium password: You need special characters and a length of 8 characters.",
                       
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <span
                    className={
                      errors.password.type === "strongPassword"
                        ? "text-lime-700"
                        : errors.password.type === "mediumPassword"
                        ? "text-amber-600"
                        : "text-rose-700"
                    }
                  >
                    {errors.password.message}
                  </span>
                )}
              </fieldset>

              <div className="mt-4 flex items-center justify-end gap-x-2">
                <button
                  className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                  type="submit"
                >
                  Change
                </button>
              </div>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ChangeCredentialsForm;
