Ovo je projekat koji koristi Reactjs biblioteku za programiranje korisnickog interfejsa, Next.js kao "build" alat.

Struktura foldera je sledeca:

-node-modules: mjesto gdje su instalirane zavisnosti\
-public: staticki podaci koji se nisu mogli importovati drugacije kako bi bili dostupni\
-scripts: ovdje se nalaze nodejs skripte za manipulaciju podataka u /src/data\
-src: glavni folder u kom se nalazi frontend kod\
-src/components: Reactjs komponente\
-src/data: ovdje se nalaze podaci koji sluze kao mock podaci za bekend\
-src/hooks: custom react hooks\
-src/mocks: postavke za "msw" dependency (service worker)\
-src/pages: fajlovi od kojih Nextjs napravi web stranice npr.(index.js=/,strana2.js="/strana2")\
-src/shared: shared utilities\
-src/types: globalni custom tipovi za typescript\
