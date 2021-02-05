SELECT id, login, data, COUNT(login)
FROM users
GROUP BY login
HAVING COUNT(login) > 1