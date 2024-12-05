-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "authordId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authordId_fkey" FOREIGN KEY ("authordId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
