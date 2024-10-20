export default function DashboardLayout({children,users,revenue,notification,login}){
    const isloggedIn =false;

    return isloggedIn ? (
     <div>
      <h1>{children}</h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notification}</div>
      </div>
    </div>
    ):(login)}
