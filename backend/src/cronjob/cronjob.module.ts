import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConstantsModule } from '../utils/constants/constants.module';
import { PostDaoModule } from '../database/daos/posts/posts.dao.module';
import { UserDaoModule } from '../database/daos/users/user.dao.module';
import { DatabaseModule } from '../database/database.module';
import { CronjobService } from './cronjob.service';
import { LoggerModule } from '../utils/logger/logger.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConstantsModule,
    LoggerModule,

    DatabaseModule,
    UserDaoModule,
    PostDaoModule,
  ],
  providers: [CronjobService],
})
export class CronjobModule {}
