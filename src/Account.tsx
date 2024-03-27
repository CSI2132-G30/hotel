export default function Account() {
	return (
		<>
			<div className='w-screen h-[calc(57rem-268px)] flex items-center justify-center'>
				<div className=' w-96 h-96 rounded-md border-2'>
					<form
						method='POST'
						className='h-20 w-fill flex items-center justify-top flex-col'>
						<div className='pt-6'>
							<span className='text-3xl text-white'> Login </span>
						</div>
						<div className='w-full pt4 pl-6'>
							<div className='justify-items-start'>Username</div>
						</div>
						<div className='w-full pl-6 pr-6'>
							<input
								type='text'
								name='username'
								className='input w-full bg-slate-700'
							/>
						</div>
						<div className='w-full pt-6 pl-6'>
							<div className='justify-items-start'>Password</div>
						</div>
						<div className='w-full pl-6 pr-6'>
							<input
								type='password'
								name='password'
								className='input w-full bg-slate-700'
							/>
						</div>
						<div className='pt-6 pl-6 pr-6 w-full items-center flex justify-items-center justify-center flex-wrap'>
							<button
								type='submit'
								name='register_user'
								className='btn btn-s w-full rounded-3xl'>
								Login as User
							</button>

							<button
								type='submit'
								name='register_admin'
								className='btn btn-s w-full rounded-3xl mt-4'>
								Login as Employee
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
