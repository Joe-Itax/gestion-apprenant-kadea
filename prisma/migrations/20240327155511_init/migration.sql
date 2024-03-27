-- CreateTable
CREATE TABLE "Formation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "designation" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duree" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Apprenant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "matricule" INTEGER NOT NULL,
    "ordinateurId" INTEGER NOT NULL,
    "codeCohorte" INTEGER NOT NULL,
    "formationDesignation" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "date_naissance" DATETIME NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    CONSTRAINT "Apprenant_ordinateurId_fkey" FOREIGN KEY ("ordinateurId") REFERENCES "Ordinateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Apprenant_codeCohorte_fkey" FOREIGN KEY ("codeCohorte") REFERENCES "Cohorte" ("code") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Apprenant_formationDesignation_fkey" FOREIGN KEY ("formationDesignation") REFERENCES "Formation" ("designation") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Coach" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "matricule" INTEGER NOT NULL,
    "formationId" INTEGER NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "date_naissance" DATETIME NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    CONSTRAINT "Coach_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "Formation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ordinateur" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag" TEXT NOT NULL,
    "modele" TEXT NOT NULL,
    "fabriquant" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cohorte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "idSession" INTEGER NOT NULL,
    CONSTRAINT "Cohorte_idSession_fkey" FOREIGN KEY ("idSession") REFERENCES "Session" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "annee" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "ville" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Appartient_Formation_Cohorte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "formationId" INTEGER NOT NULL,
    "codeCohorte" INTEGER NOT NULL,
    CONSTRAINT "Appartient_Formation_Cohorte_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "Formation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appartient_Formation_Cohorte_codeCohorte_fkey" FOREIGN KEY ("codeCohorte") REFERENCES "Cohorte" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Peut_Avoir_Coach_Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idCoach" INTEGER NOT NULL,
    "idSession" INTEGER NOT NULL,
    CONSTRAINT "Peut_Avoir_Coach_Session_idCoach_fkey" FOREIGN KEY ("idCoach") REFERENCES "Coach" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Peut_Avoir_Coach_Session_idSession_fkey" FOREIGN KEY ("idSession") REFERENCES "Session" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Peut_Avoir_Coach_Cohorte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idCoach" INTEGER NOT NULL,
    "codeCohorte" INTEGER NOT NULL,
    CONSTRAINT "Peut_Avoir_Coach_Cohorte_idCoach_fkey" FOREIGN KEY ("idCoach") REFERENCES "Coach" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Peut_Avoir_Coach_Cohorte_codeCohorte_fkey" FOREIGN KEY ("codeCohorte") REFERENCES "Cohorte" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Formation_designation_key" ON "Formation"("designation");

-- CreateIndex
CREATE UNIQUE INDEX "Apprenant_matricule_key" ON "Apprenant"("matricule");

-- CreateIndex
CREATE UNIQUE INDEX "Coach_matricule_key" ON "Coach"("matricule");

-- CreateIndex
CREATE UNIQUE INDEX "Ordinateur_tag_key" ON "Ordinateur"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "Cohorte_code_key" ON "Cohorte"("code");
