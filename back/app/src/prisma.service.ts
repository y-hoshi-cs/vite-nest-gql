import { OnModuleInit, INestApplication, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

// https://zenn.dev/rince/articles/50a66241d04f0b
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
