function UserCard({ user }) {
  return (
    <div className='card'>
      <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="profile" />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.company.name}</p>
    </div>
  )
}

export default UserCard