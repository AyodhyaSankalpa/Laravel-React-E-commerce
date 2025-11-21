export const apiUrl = 'http://localhost:8000/api'

export const adminToken = () => {
    const data = JSON.parse(localStorage.getItem('adminInfo'))
    return data.token;
}

export const userToken = () => {
    const data = JSON.parse(localStorage.getItem('userInfo'))
    return data.token;
}

export const STRIPE_PUBLIC_KEY='pk_test_51SVm8IIUFyNDylJGaGuxI9tJLESQkKFYzInsoUmfcQQyPqJ4T67JTWAwJf1So1vVGsN6ZkcBOn32EKCvnYr7NQDN00SrwWTkKx'