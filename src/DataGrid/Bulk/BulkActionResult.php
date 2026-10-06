<?php
declare(strict_types=1); namespace App\DataGrid\Bulk; final readonly class BulkActionResult {/** @param list<int> $processedIds */ public function __construct(public int $affected,public string $message,public array $processedIds){}}
