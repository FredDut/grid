<?php
declare(strict_types=1); namespace App\DataGrid\Bulk; use Symfony\Bundle\SecurityBundle\Security; interface BulkActionInterface {public function name():string;/** @param list<int> $ids */public function execute(array $ids,Security $s):BulkActionResult;}
