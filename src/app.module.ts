import { Module } from '@nestjs/common';




import { MongooseModule } from '@nestjs/mongoose';
import { TeamsModule } from './teams/teams.module';
import { TaskModule } from './tasks/tasks.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017', {
    dbName: 'taskdb',
  }),TeamsModule,TaskModule],
  
  
})
export class AppModule {}
