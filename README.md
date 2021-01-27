To launch:
```
docker-compose -f ./docker/docker-compose.dev.yml up --build --force-recreate
```

To shutdown:
```
docker-compose -f ./docker/docker-compose.qa.yml down --rmi all --volumes --remove-orphans
```

---

to see the project in web browser: `http://localhost:8083/`


---

oidc config files for hydra:
```
./packages/oidc-provider-hydra/config/hydra.yml
```


oidc config files for oathkeeper:
```
./packages/iap-oathkeeper/.oathkeeper.yaml
./packages/iap-oathkeeper/rules.dev.yaml

```
---

To run command line items inside hydra (project has to be running)
```
docker exec -it docker_hydra_1 /bin/sh
```
(the command is hydra)


hydra api docs:  `https://www.ory.sh/hydra/docs/reference/api/#json-web-keys-discovery`

oidc endpoint: `http://127.0.0.1:4444/.well-known/openid-configuration`
