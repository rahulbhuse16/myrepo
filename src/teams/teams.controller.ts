// teams.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TeamsService } from './teams.service';

import { CreateTeamDto } from './create-team.dto';
import { Team } from './team.interface';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto[]): Promise<Team[]> {
    return this.teamsService.create(createTeamDto);
  }

  @Get()
  findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Team> {
    return this.teamsService.findById(id);
  }
}
