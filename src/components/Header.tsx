import { useSession, signIn, signOut } from "next-auth/react"

export const  Header = ()=> {
    const {data : sessionData} = useSession()
  return (
    <div className="navbar bg-primary text-primary-content">
        <div className="flex-1 pl-5 text-3xl font-bold">
            {sessionData?.user?.name ? `Notes for ${sessionData.user.name}`: ''}
        </div>
        <div className="dropdown-end dropdown">
            {sessionData?.user? (
                <label tabIndex={0} className="btn-circle avatar btn btn-ghost" onClick={() => void signOut()} htmlFor="">
                    <div className="w-10 rounded-full">
                        <img src={sessionData?.user?.image ?? ""} alt={sessionData?.user?.image ?? ""} />
                    </div>
                </label>
            ): (
                <button className="btn-circle rounded-btn btn" onClick={() => void signIn()}>Sign In</button>
            )}
        </div>
    </div>
  )
}

export default Header